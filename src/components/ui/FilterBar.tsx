'use client';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  filters: FilterOption[];
  activeFilter: string;
  onFilterChange: (value: string) => void;
}

export default function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist">
      {filters.map((filter) => (
        <button
          key={filter.value}
          role="tab"
          aria-selected={activeFilter === filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
            activeFilter === filter.value
              ? 'border border-brick-ember-500 bg-brick-ember-500/10 text-brick-ember-400'
              : 'border border-silver-800 text-silver-500 hover:border-silver-600 hover:text-silver-300'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
