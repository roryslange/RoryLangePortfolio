export default function About() {

    return(
        <section>
            <div>
                <h1 className="text-3xl">
                    Rory Lange
                </h1>
                <br/>
            </div>

            <div>
                <p className="flex flex-auto">
                
                    Welcome to my personal website! I am currently a Senior at Wayne State University in Detroit, MI, and my projected graduation date is December 2024. 
                    Throughout my education I have familliarized myself with a large varieties of technologies and frameworks. I am a creative software engineer who has 
                    a strong desire to learn, a passion for programming, and a hardworking mindset.
                </p>

                <img src='src/assets/roryMotorcycle.jpeg' height={600} width={300} className="flex flex-auto"></img>
                
                <br/>
                
                <p>
                    Feel free to explore this website. I wrote this website using React + Vite to extend my knowledge of frontend frameworks. On the Projects tab you can find
                    links to repositories of other projects I have created and participated in. Feel free to reach out to me in the socials page, I am always interested in learning
                    about new opportunities and projects that I could take part in.
                </p>
            </div>

        </section>
    )
}