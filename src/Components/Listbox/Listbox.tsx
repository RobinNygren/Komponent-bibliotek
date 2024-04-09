import { useRef, useState } from "react";
import "./Listbox.scss";
import { HiChevronUpDown } from "react-icons/hi2";

type PeopleProps = {
  id: number;
  name: string;
  unavailable: boolean;
};

const Listbox: React.FC<{ people: PeopleProps[] }> = ({ people }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selected, setSelected] = useState<PeopleProps | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsExpanded(!isExpanded);

  const handleSelection = (people: PeopleProps) => {
    setSelected(people);
    setIsExpanded(false);
  };

  return (
    <div ref={dropdownRef} className="Listbox">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selected ? selected.name : "Select a name"}
        <HiChevronUpDown className="chevronUpDown" />
      </button>
      {isExpanded && (
        <ul className="dropdown-menu">
          {people.map((peoples, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelection(peoples)}
            >
              {peoples.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listbox;
