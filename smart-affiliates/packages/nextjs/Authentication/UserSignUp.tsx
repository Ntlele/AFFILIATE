"use client";

import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerUser } from "./utils/UserSignUp";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

export default function UserSignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await registerUser(formData.name, formData.username, formData.email, formData.password);

      alert("User registered successfully!");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center sm:p-0 p-20 text-lg">
      <motion.div
        className="card glass w-96 sm:p-1 p-10 shadow-lg rounded-lg backdrop-blur-md neon-background reflection"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xl font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-xl font-medium" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-xl font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-xl font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="card-actions justify-end mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn text-2xl btn-primary w-full bg-black mt-4 neon-text font-semibold p-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                {isSubmitting ? "Registering..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
