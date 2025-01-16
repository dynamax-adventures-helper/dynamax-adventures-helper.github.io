import { FC, useState } from "react";

interface AutocompleteProps {
    options: string[]
    onChange: (event: React.ChangeEvent<Element>, newValue: string) => void
}

const AutoComplete: FC<AutocompleteProps> = ({options, onChange}) => {
    const [input, setInput] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
    const [size, setSize] = useState(5);
    return (
        <div className="flex flex-col items-center">
            <input
                className="rounded-lg bg-neutral-600 p-1.5 text-neutral-100 w-full max-w-md mt-7"
                value={input}
                onChange={event => {
                    setInput(event.target.value); 
                    const opts = filterOptions(options, event.target.value)
                    setFilteredOptions(opts);
                    setSize(handleSize(opts));
                }}
                placeholder="Search for a pokemon"
                onClick={() => {
                    if (filteredOptions.length === 0 && !input) {
                        setFilteredOptions(options)
                    }
                }} 
            />
            { filteredOptions.length > 0 &&
                <select 
                    className="bg-neutral-600 appearance-none w-full max-w-sm absolute mt-16 rounded-b-lg p-1.5" 
                    size={size} 
                    onChange={event => {
                        setInput(event.target.value);
                        setSize(0);
                        setFilteredOptions([]);
                        onChange(event, event.target.value);
                    }}
                >
                    {filteredOptions.map(option => (
                        <option className="text-lg" key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select> 
            }
        </div>
    );
}

export default AutoComplete;

function filterOptions(options: string[], input: string): string[] {
    return options.filter(option => option.toLowerCase().includes(input.toLowerCase()));
}

function handleSize(filteredOptions: string[]): number {
    if (filteredOptions.length >= 5) {
        return 5;
    } else if (filteredOptions.length === 1) {
        return 2;
    } else {
        return filteredOptions.length
    }
}