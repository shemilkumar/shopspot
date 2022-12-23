import React from "react";
import { useState } from "react";
import { Confirm } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import the default styles

function LogoutModal() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    // Perform logout actions here
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    handleLogout();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowConfirm(true)}
        className="p-4 bg-blue-700 text-white cursor-pointer"
      >
        Logout
      </button>
      {true && (
        <Confirm
          title="Logout Confirmation"
          message="Are you sure you want to logout?"
          confirmLabel="Logout"
          cancelLabel="Cancel"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          customClass="bg-red-500 text-white" // Add custom Tailwind CSS classes here
        />
      )}
    </div>
  );
}

export default LogoutModal;
