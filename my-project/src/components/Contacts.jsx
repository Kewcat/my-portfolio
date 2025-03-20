import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h3 className="my-10 text-center text-4xl">Get in Touch</h3>
      <div className="text-center tracking-tighter">
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contacts;