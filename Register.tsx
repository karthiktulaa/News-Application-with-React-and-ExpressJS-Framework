import React, { useState } from 'react';
              Sign in
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;import React, { useState } from 'react';
          label="Email address"
          id="email"
          type="email"
          required
          autoComplete="email"
        />
        <FormInput
          label="Password
          id="password"
          type="password"
          required
          autoComplete="new-password"
        />
        <FormInput
          label="Confirm password"
          id="confirmPassword"
          type="password"
          required
          autoComplete="new-password"
        />

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{' '}
            <a href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
              Privacy Policy
            </a>
          </label>
        </div>

        <SubmitButton label="Create account" isLoading={isLoading} />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
