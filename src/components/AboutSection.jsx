import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
return <section ide = "about" className="py-24 px-4 relative">
    {" "}
    <div className="container mx-auto mac-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className = "text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
                    <h3>Aspiring Full Stack Developer</h3>
                    <p className="text-muted-foreground">
                        With 3 years of experience, I am passionate about crafting seamless and efficient web applications that deliver exceptional user experiences. My expertise spans both front-end and back-end development, allowing me to create holistic solutions that meet diverse client needs.
                    </p>
                    <p className="text-muted-foreground">
                        I'm eager to contribute my skills and enthusiasm to a dynamic team, where I can continue to grow and make a meaningful impact in the tech industry.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center text">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="Eian-Ferba-Software Engineer.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p03 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                    Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js to build responsive and user-friendly web interfaces.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p03 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p03 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

    </div>
</section>
}