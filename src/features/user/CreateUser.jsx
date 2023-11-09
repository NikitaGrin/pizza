import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function createUser() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!name) return;
        dispatch(updateName(name));
        navigate("/menu");
      }}
    >
      <p className="pb-5">👋 Welcome! Please start by telling us your name:</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
        placeholder="Your full name"
      />
      {name && (
        <div className="mt-5">
          <Button type="small">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default createUser;
