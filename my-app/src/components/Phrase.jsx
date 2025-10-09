function Greeting({ name }) {
    return <h1>Hello, {name}</h1>;
}

export default function App2() {
    return <Greeting name="world" />
}