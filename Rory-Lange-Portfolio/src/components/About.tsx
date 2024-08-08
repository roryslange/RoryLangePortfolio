export default function About() {

    return(
        <div>
            <div>
                <h1 className="text-3xl">
                    Rory Lange
                </h1>
                <br/>
            </div>

            <div className="overflow-auto">
                
                <img src='src/assets/roryMotorcycle.jpeg' 
                    alt="Me and my 2016 Honda CB500F (the photo makes me look short)"
                    height={800} width={400} 
                    className="max-h-[50%] max-w-[25%] ml-2 float-right shadow-xl" />
                
                <div>
                    <p>
                    
                        Welcome to my personal website! I am currently a Senior at Wayne State University in Detroit, MI, and my projected graduation date is December 2024. 
                        Throughout my education I have familliarized myself with a large varieties of technologies and frameworks. I am a creative software engineer who has 
                        a strong desire to learn, a passion for programming, and a hardworking mindset.
                        

                    </p>
                    <br/>

                    <p>

                        Feel free to explore this website. I wrote this website using React + Vite to extend my knowledge of frontend frameworks. On the Projects tab you can find
                        links to repositories of other projects I have created and participated in. Feel free to reach out to me in the socials page, I am always interested in learning
                        about new opportunities and projects that I could take part in.
                    
                    </p>
                </div>


            </div>

        </div>
    )
}