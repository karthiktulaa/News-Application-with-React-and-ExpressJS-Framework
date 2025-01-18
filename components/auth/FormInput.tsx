import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  Icon: LucideIcon;
  autoComplete?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  type,
  label,
  value,
  onChange,
  placeholder,
  Icon,
  autoComplete
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required
          className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   placeholder-gray-400 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};