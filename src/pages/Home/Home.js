import { Title } from "./Home.styled";

export default function Home() {
    return (
      <div >
        <Title>
          Phonebook welcome page{' '}
          <span role="img" aria-label="Telephone icon">
            ☎️
          </span>
        </Title>
      </div>
    );
  }