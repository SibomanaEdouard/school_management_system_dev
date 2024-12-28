import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const StudentDetails = ({ student, onClose }) => (
  <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl p-6">
    <div className="text-right mb-6">
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        ×
      </button>
    </div>

    <div className="text-center mb-6">
      <img
        src={student.avatar}
        alt={student.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{student.name}</h2>
      <p className="text-gray-600">Science student</p>
    </div>

    <div className="flex justify-center gap-4 mb-8">
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Mail size={20} className="text-gray-600" />
      </button>
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Phone size={20} className="text-gray-600" />
      </button>
    </div>

    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">About</h3>
        <p className="text-sm">
          If you have access to your website's files through cPanel or FTP, disable any
          security plugins that might be blocking your login by renaming their folders in the
          plugins directory.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Age</h3>
          <p>17</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Gender</h3>
          <p>{student.gender}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Students from the same class
        </h3>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
              alt={`Student ${i}`}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
          <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm text-gray-600">
            +2
          </div>
        </div>
      </div>
    </div>
  </div>
);
