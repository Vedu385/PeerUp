import React, { useState } from "react";

const ComplaintBox = () => {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", formData);
    alert("Your complaint has been submitted anonymously.");
    setFormData({ category: "", description: "" });
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-3xl mx-auto mt-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Report Harassment or Bullying
      </h2>

      <p className="text-gray-500 mb-6">
        Your voice matters. All reports are confidential and handled responsibly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Category */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Issue</option>
            <option value="Harassment">Harassment</option>
            <option value="Bullying">Bullying</option>
            <option value="Discrimination">Discrimination</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Describe the situation..."
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintBox;