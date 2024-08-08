import { SocialIcon } from 'react-social-icons'


export default function About() {

    const socials = [
        { network: 'github', url: 'https://github.com/roryslange' },
        { network: 'linkedin', url: 'https://linkedin.com/in/roryslange' },
        { network: 'instagram', url: 'https://instagram.com/rory_lange' }
      ];

    

    return(
        <div>
            <div className='flex flex-grow pb-4 '>
                <h1 className="flex flex-grow text-5xl">
                    Rory Lange
                </h1>

                <ul className='flex justify-self-end gap-4'>
                    <li>
                        {socials.map((social, index) => (
                            <SocialIcon 
                                key={index} 
                                network={social.network} 
                                url={social.url} 
                                bgColor='#E85A4F' 
                                fgColor='#D8C3A5' 
                                className='flex ml-2 hover:drop-shadow-xl hover:-translate-y-1 duration-300' 
                                />
                            ))}
                    </li>
                </ul>

                <br/>
            </div>

            <div className="overflow-auto ">
                
                <img src='src/assets/roryMotorcycle.jpeg' 
                    alt="Me and my 2016 Honda CB500F (the photo makes me look short)"
                    height={800} width={400} 
                    className="max-h-[50%] max-w-[25%] ml-2 float-right shadow-xl" />
                
                <div>
                    <p>
                    
                        Welcome to my personal website! I am currently a Senior at Wayne State University in Detroit, MI, and my projected graduation date is December 2024. Throughout my education I have familliarized myself with a large varieties of technologies and frameworks. I am a creative software engineer who has a strong desire to learn, a passion for programming, and a hardworking mindset.
                        

                    </p>

                    <br/>

                    <p>

                        Feel free to explore this website. I wrote this website using React + Vite to extend my knowledge of frontend frameworks. On the Projects tab you can find links to repositories of other projects I have created and participated in. Feel free to reach out to me in the socials page, I am always interested in learning about new opportunities and projects that I could take part in.
                    
                    </p>

                    <br/>

                    
                </div>

                


            </div>

        </div>
    )
}