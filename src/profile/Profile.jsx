import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const storedSession = localStorage.getItem("session");
    if (!storedSession) {
      navigate("/");
      return;
    }
    const session = JSON.parse(storedSession);
    if (Date.now() > session.expiresAt) {
      navigate("/");
      return;
    }
    setUser(session.user);
    setUpdateData({
      name: session.user.name,
      email: session.user.email,
    });
  }, [navigate]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const storedSession = JSON.parse(localStorage.getItem("session"));
    const updateSession = {
      ...storedSession,
      user: {
        ...storedSession.user,
        name: updateData.name,
        email: updateData.email,
      },
    };
    localStorage.setItem("session", JSON.stringify(updateSession));
    setUser(updateSession.user);

    alert("Profile updated successfully!");
  };
  const clickToOpen = () => {
    setIsEditing(true);
  };
  const passwordUpdate = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    const passwordUpdate = (e) => {
      e.preventDefault();

      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      const updatedUser = {
        ...storedUser,
        password: updateData.password,
      };

      localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
      localStorage.removeItem("session");
      alert("Password updated successfully!");
    };
    const updatedUser = {
      ...storedUser,
      password: updateData.password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(updatedUser));

    alert("Password updated successfully!");
    navigate("/login");
  };

  const goBack = () => {
    navigate("/home");
  };
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
              Account
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Profile Overview
            </h1>
          </div>

          <button
            onClick={goBack}
            className="px-6 py-2 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-80 transition"
          >
            Go Back
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400">Full Name</p>
              <p className="text-lg font-medium text-gray-900">{user?.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email Address</p>
              <p className="text-lg font-medium text-gray-900">{user?.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Member Since</p>
              <p className="text-lg font-medium text-gray-900">
                {new Date().toLocaleDateString()}
              </p>
              <button
                onClick={clickToOpen}
                className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-80 transition"
              >
                Update Password
              </button>
              {isEditing && (
                <>
                  <input
                    type="email"
                    name="email"
                    value={updateData.password}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, password: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    onClick={passwordUpdate}
                    className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-80 transition"
                  >
                    Update Password
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Benefits</h2>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>✔ Early access to seasonal sales</li>
                <li>✔ Faster checkout experience</li>
                <li>✔ Exclusive member-only discounts</li>
              </ul>
            </div>

            <div>
              <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-80 transition">
                Browse Collection
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Edit Profile</h2>

          <input
            type="text"
            name="name"
            value={updateData.name}
            onChange={(e) =>
              setUpdateData({ ...updateData, name: e.target.value })
            }
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            value={updateData.email}
            onChange={(e) =>
              setUpdateData({ ...updateData, email: e.target.value })
            }
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-black text-white rounded-full text-sm hover:opacity-80 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
