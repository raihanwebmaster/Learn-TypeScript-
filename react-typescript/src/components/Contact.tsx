import React from "react";

interface IProps {
  name: string;
  email?: string;
  handelRemove: (email: string) => void; 
}

const Contact = ({ name, email = "N/A", handelRemove }: IProps) : JSX.Element => {
  return (
    <div className="card">
      <p>
        <strong>Name </strong>
        {name}
      </p>
      <p>
        <strong>Email </strong>
        {email}
      </p>
      <button onClick={() =>handelRemove(email)}>Remove</button>
    </div>
  ); 
};
export const ContactDemo: React.FC<IProps> = ({
  name,
  email = "N/A",
}) => {
  return (
    <div className="card">
      <p>
        <strong>Name </strong>
        {name}
      </p>
      <p>
        <strong>Email </strong>
        {email}
      </p>
    </div>
  );
};

export default Contact;
