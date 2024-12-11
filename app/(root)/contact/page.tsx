"use client";

import React, { useState } from "react";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("body", body);

    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus(`Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      setStatus("Error sending email");
    }
  };

  return (
    <>
      <div className="pt-32 bg-[url('/crm.jpg')] bg-cover bg-center h-screen">
        <div className="max-w-lg mx-auto rounded-lg shadow-lg p-10 backdrop-blur-lg">
          <h1 className="text-2xl font-bold text-center mb-4 text-black">
            Send Email
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 mt-1 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 mt-1 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Subject
              </label>
              <input
                type="text"
                className="w-full p-2 mt-1 border rounded-md"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Body
              </label>
              <textarea
                className="w-full p-2 mt-1 border rounded-md"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                rows={5}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Attach File (Optional)
              </label>
              <input
                type="file"
                className="w-full p-2 mt-1 border rounded-md bg-white"
                onChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-grey-500"
            >
              Send Email
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>
    </>
  );
};

export default EmailForm;