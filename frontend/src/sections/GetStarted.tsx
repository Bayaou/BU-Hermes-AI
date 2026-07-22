// src/Sections/GetStarted.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

interface GetStartedProps {
  id?: string;
}

const GetStarted: React.FC<GetStartedProps> = ({ id = 'get-started' }) => {
  return (
    <section id={id} className="py-20 border-t">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-gray-600 mb-8">Join thousands of businesses already using BU Hermes-AI</p>
        <Link to="/register">
          <Button>Get Started</Button>
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;