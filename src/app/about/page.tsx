import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    // Increasing the horizontal margin with mx-20
    <div className="flex flex-col text-left justify min-h-screen py-6 mx-20">
      <h1 className="text-6xl font-bold">About Me</h1>
      <hr className="border-t-2 border-gray-300 my-4 w-full" />
      <p className="text-xl">
        I&apos;m a computer science student based in Santiago, studying at the
        University of Chile. I&apos;m in my final year of studies, and I&apos;m
        currently working on my thesis. I have a passion for software
        development, and I&apos;m always looking to learn new things to improve
        my skills.
      </p>
      <h1 className="text-6xl font-bold mt-8">Experience</h1>
      <hr className="border-t-2 border-gray-300 my-4 w-full" />
      <p className="text-xl">
        I&apos;ve worked as a summer intern for two companies, mainly focused on
        building applications with Python and SQL to automate tasks. I&apos;ve
        also worked as a teaching assistant for the Databases course at my
        university.
      </p>
      <div className="flex flex-col">
        <Accordion type="single" collapsible className="mt-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="text-4xl font-bold">Intern at LVA Indices</h1>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="mt-6">
                <CardHeader>
                  <CardDescription>
                    January 2023 - February 2023
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Worked as a summer intern at LVA Indices, a Chilean fintech
                    that provides indicators for Latinamerican stock markets. I
                    worked on a project to automate the generation of fixed
                    income indicators, using Python and SQL. I also used Apache
                    Airflow to schedule the execution of the scripts.
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="text-4xl font-bold">
                Teaching Assistant @ U. de Chile
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="mt-6">
                <CardHeader>
                  <CardDescription>August 2022 - December 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Worked with a team of teaching assistants for the Databases
                    course at the University of Chile. I was in charge of
                    helping around 200 students with their assignments, and
                    grading them.
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className="text-4xl font-bold">Intern at Vantrust Capital</h1>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="mt-6">
                <CardHeader>
                  <CardDescription>
                    December 2021 - February 2022
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Worked as a summer intern at Vantrust Capital, a Chilean
                    stock broker. I worked on a project to automate FX Spot
                    Pricing, using Python and SQL. The project also interacted
                    with the Refinitiv Eikon API to get real-time market data.
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <h1 className="text-6xl font-bold mt-8">Awards</h1>
      <hr className="border-t-2 border-gray-300 my-4 w-full" />
      <p className="text-xl">
        My dedication to my studies has allowed me to receive the
        <a href="https://ingenieria.uchile.cl/escuela/la-escuela/distinciones/alumnos-destacados">
          <span className="font-bold underline">
            {" "}
            &apos;Alumno Destacado&apos;{" "}
          </span>
        </a>
        award every year since 2019. This award is given to students who have
        achieved the highest grades throughout the year.
      </p>
    </div>
  );
}
