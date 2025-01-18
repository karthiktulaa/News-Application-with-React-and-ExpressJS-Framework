import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface PollCardProps {
  question: string;
  options: PollOption[];
  onVote: (optionId: string) => void;
}

export const PollCard: React.FC<PollCardProps> = ({ question, options, onVote }) => {
  const [hasVoted, setHasVoted] = useState(false);
  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (optionId: string) => {
    if (!hasVoted) {
      onVote(optionId);
      setHasVoted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {question}
        </h3>
      </div>
      <div className="space-y-3">
        {options.map((option) => {
          const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
          
          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              disabled={hasVoted}
              className="w-full text-left"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 bg-blue-100 dark:bg-blue-900/50 rounded"
                  style={{ width: `${percentage}%` }}
                />
                <div className="relative px-4 py-2 flex justify-between">
                  <span>{option.text}</span>
                  {hasVoted && (
                    <span className="text-sm text-gray-500">
                      {percentage.toFixed(1)}%
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {totalVotes} votes
      </div>
    </div>
  );
};