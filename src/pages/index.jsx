import Image from "next/image";
import { Inter } from "next/font/google";
import Select, { GroupBase, OptionProps, components } from 'react-select';
import { JSX, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const CustomOption = (props) => {

  return (
    <components.Option {...props}>
   <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image 
          src={props.data.image} // Path to the image, which should be a property in your options object
          alt="Profile"
          width={24} // Adjust the size as needed
          height={24}
          style={{ borderRadius: '50%', marginRight: '10px' }} // Make the image rounded and add margin
        />
        <div>
          <div>{(props.label)}</div> {/* This is where the name will go */}
          <div style={{ fontSize: 'smaller' }}>{props.data.email}</div> {/* This is where the email will go */}
        </div>
      </div>
    </components.Option>
  );
};

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Mariana Augustine", label: "Mariana Augustine",image:"/zane.jpeg",email: 'mariana@example.com' },
    { value: "Anita Gros", label: "Anita Gros",image:"/anita.jpeg",email: 'anita@example.com' },
    { value: "Harvey Specter", label: "Harvey Specter",image:"/harvey.jpeg",email: 'harvey@example.com' },
    { value: "Racheal Zane", label: "Racheal Zane",image:"/zane.jpeg",email: 'zane@example.com' },
    { value: "Michael Jackson", label: "Michael Jackson",image:"/harvey.jpeg",email: 'michael@example.com' },
    { value: "Louis Litt", label: "Louis Litt",image:"/littjpg.jpg",email: 'litt@example.com' },
    { value: "David Warner", label: "David Warner",image:"/ross.jpg",email: 'david@example.com'},
    { value: "Kevin Hart", label: "Kevin Hart",image:"/harvey.jpeg",email: 'kevin@example.com' },
  ];
  return (
    <main
      className={`flex gap-8 flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-5xl font-sans font-medium">Form Input</h1>
      <Select
        options={options}
        className="w-1/2"
        defaultValue={selectedOption}
        placeholder="Select your value"
        // onChange={setSelectedOption}
        
        components={{ Option: CustomOption}}
        isMulti
        isSearchable
        dropdownIndicator={false}
        noOptionsMessage={() => "No options found"}
        styles={{
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "white" : "black",
            backgroundColor: state.isSelected ? "blue" : "white",
            padding: 20,
            borderBottom: "1px solid black",
          }),
          control: (provided, state) => ({
            ...provided,
            backgroundColor: "white",
            border: "none",
            borderRadius: 0,
            borderBottom: "1px solid black",
            boxShadow: "none",
            "&:hover": {
              border: "none",
              borderBottom: "1px solid black",
            },
          }),
          menu: (provided, state) => ({
            ...provided,
            width: "50%",

          }),
          clearIndicator: (provided, state) => ({
            ...provided,
            color: "white",
            "&:hover": {
              color: "white",
            },
          }),
          multiValue: (provided, state) => ({
            ...provided,
            backgroundColor: "grey",
            color: "white",
            borderRadius: "30px",
            padding: "2px 20px",
          }),
          multiValueLabel: (provided, state) => ({
            ...provided,
            color: "white",
          }),
          multiValueRemove: (provided, state) => ({
            ...provided,
            color: "white",
            "&:hover": {
              backgroundColor: "white",
              color: "blue",
            },
          }),
        }}
      />
    </main>
  );
}
