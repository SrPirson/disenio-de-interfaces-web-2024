function AnimalList() {

    const animales = [
        {
            id: 1,
            name: "dog",
        },
        {
            id: 2,
            name: "cat",
        },
        {
            id: 3,
            name: "bird",
        },
    ];

    const HTMLAnimales = animales.map((animal) => {
        return (
            <li key={animal.id}>
                <h3>{animal.name}</h3>
            </li>
        )
    })

  return (
    <section>
        <h2>Animales:</h2>
        <ul>
            {HTMLAnimales}
        </ul>
    </section>
  )
}

export default AnimalList