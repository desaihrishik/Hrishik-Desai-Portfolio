import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ArmouredRobotPublication() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#publications">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <div className="mb-8 pb-8 border-b">
            <div className="text-sm text-muted-foreground mb-2">
              ISSN: 2456-5474 | RNI No. UPBIL/2016/68367 | VOL.- VIII, ISSUE- VII | August 2023
            </div>
            <div className="text-sm text-muted-foreground mb-4">Innovation The Research Concept</div>

            <h1 className="text-4xl font-bold text-foreground mb-4">Development of Armoured Robot</h1>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>Paper Id: 17960</p>
              <p>Submission Date: 08/08/2023 | Acceptance Date: 14/08/2023 | Publication Date: 25/08/2023</p>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-foreground">Hrishik B. Desai</p>
              <p className="text-sm text-muted-foreground">Student, Electrical Engineering Department</p>
              <p className="text-sm text-muted-foreground">
                The Maharaja Sayajirao University Of Baroda, Vadodara, Gujarat, India
              </p>
            </div>

            <div className="mt-4 p-4 bg-muted/50 rounded-lg text-sm">
              <p className="text-muted-foreground">
                This is an open-access research paper/article distributed under the terms of the Creative Commons
                Attribution 4.0 International, which permits unrestricted use, distribution, and reproduction in any
                medium, provided the original author and source are credited.
              </p>
              <a
                href="http://www.socialresearchfoundation.com/innovation.php#8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
              >
                Verify this paper <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Abstract</h2>
            <p className="text-muted-foreground leading-relaxed">
              In military applications requiring ground surveillance of active battle zones and other such areas where
              sending human beings might not be feasible and even dangerous to the life of human being, alternate
              solutions apart from drones must be considered. Drones provide bird eye view of the area but are limited
              by the fact that they cannot report actual ground conditions during active battle. In such conditions, an
              armored robot much like a tank can be used to review ground conditions and also deliver equipment upon
              modification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Keywords</h2>
            <p className="text-muted-foreground">
              Armoured Robot, Traversing Robot, Robot for Battlefield, Robot with no Mechanical Arms or Legs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              With the increase in the trend of using robots for all applications where human intervention may not be
              possible and where safety and cost are important factors, the necessity of robots that can traverse the
              battlefield without taking much damage is felt. Many solutions are proposed for such robots for
              battlefield use but they are very complicated and costly involving mechanical legs and crane like
              apparatus, but these are meant for support to soldier and very few designs focus purely on surveillance.
              This paper deals with the design and development of an armored robot with 2 degrees of freedom. The CAD
              model of the Robot has been made in Fusion 360 software at the Faculty of Technology and Engineering, the
              Maharaja Sayajirao University of Baroda. The proposed robot is a tank with no mechanical arms or legs and
              is cost effective using commercially available methods of manufacture.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Aim of Study</h2>
            <p className="text-muted-foreground leading-relaxed">
              In military applications requiring ground surveillance of active battle zones and other such areas where
              sending human beings might not be feasible and even dangerous to the life of human being, alternate
              solutions apart from drones must be considered. Drones provide bird eye view of the area but are limited
              by the fact that they cannot report actual ground conditions during active battle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Review of Literature</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most of the robots in the market have bi-directional motion. So, for a better case it would be good to
              consider an omni-directional motion. This website helped me understand the work case of these modern day
              wheels.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the case of mechanical designing and strength of the model, it seemed important to design a strong and
              sturdy design, that is not broken down by any kind of attack or thrust on its surface. Corran, R. S.
              (1983). Impact loading of plates - An experimental investigation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Main Text</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3">Mechanical Design</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The structure of the robot can be divided into 3 parts:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">
              <li>Frame</li>
              <li>Main Body (defensive plates)</li>
              <li>Triangular Protrusions (extra armor)</li>
            </ol>

            <p className="text-muted-foreground leading-relaxed mb-4">
              In our prototype, the frame is made from Mild Steel angle sections with dimensions 25 x 25 x 5
              millimeters. The angle sections are welded together by MMAW using mild steel electrode and subsequently
              grinded to obtain smooth surface to form a cuboidal shape of dimensions given below. This was important to
              provide core structural rigidity to the body and will later act as a chassis for the body and armor
              plating.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              For initial testing, the body is made using mild steel plates of thickness 5 mm and is the main armor
              providing resistance to the internal sensors and electronics from direct impact. Plates of mild steel are
              directly welded to the frame using methods similar to the ones used to weld angle sections together. The 5
              mm plates provide considerable armor against small projectiles. The Top plate is Fitted using M10 bolts
              whose nuts are welded to the frame to maintain accessibility to the internal components. This was the
              initial prototype and further improvements to the armor can be carried out.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The Protrusions in the form of right-angle triangles of size 100 x 100 x 12 millimeters are welded to the
              side plates of the body. These provide excellent resistance against direct impact loads and offer some
              relief to the body by absorbing appreciable protection from projectiles.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Design Calculations</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Total weight (in KG) = density of steel x ((volume of 1 angle section x total angle sections used) +
              (volume of 1 plate x total plates used) + (volume of 1 triangle x total triangles used))
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is done to get an estimate of the weight of the structure and hence select the appropriate motor.
              Note that the actual weight will vary somewhat than the calculated value.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Static Loading</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Load = permissible tensile strength x ((cross sectional area of angle section x 4) + (cross sectional area
              of plate x 4))
              <br />
              In actual practice, load capacity is much higher due to the welded joints and triangles.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Translation Motors</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Initially, geared DC motors were used in testing which resulted in poor performance and very low torque.
              The motors burned out due to such heavy load. Later, Planetary geared DC motors were used with RS735
              motors and P219 gearbox with 19.2:1 gear ratio. These motors provided high torque and much better
              performance. However, they require a very high current posing difficulty in cooling and burning up wires.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Wheels</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mecanum wheels were used in the prototype to give an additional degree of freedom. These wheels provide
              sliding movements which is useful for good controllability. However, for rough terrain wheels can be
              changed to simple cylindrical wheels quite easily.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Control System</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Control System includes a microcontroller and Motor Driver Shield for controlling the motors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">The advantages of using a microcontroller are:</p>
            <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">
              <li>Compact and reprogrammable unlike hardwired circuitry.</li>
              <li>At a later stage inclusion of other features required by users may be added without any hassle.</li>
              <li>Can be remotely operated and also automated.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The controller used for the purpose of the prototype was FlySkyiX6. 6channel, 2.4GHz radio with telemetry
              capability.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Microcontroller</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The microcontroller employed is the Arduino UNO. It is a commonly used microcontroller in many prototype
              projects and is easily programmable. This was used as the resources for the Arduino UNO are easily
              available.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Power Source</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Due to high current requirements, 12V LiPo batteries were used. 2 batteries were used due to high power
              draining motors and the circuit configurations which will be shown.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Hypothesis</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Robot is made using mild steel plates of high thickness and is designed such that it can withstand
              high impact and static loading (Corran, R. S., 1983). The triangular protrusions welded to the body are
              unique to this design only and provide high strength and impact resistance. High power motors are used to
              provide maximum thrust for irregular terrain. Thus, on a weight basis, the designed proposed here provides
              the most effective defense with less cost.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              A robot was developed which could take huge damage while still retaining function. The proposed design has
              the most effective defence armour on weight basis with direct implications of low cost.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Suggestions for the Future Study</h2>
            <p className="text-muted-foreground leading-relaxed">
              This is a prototype model of our research work, and if developed professionally with help of armament
              companies, it can get us world-class results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Acknowledgement</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>
                I am thankful to my following colleagues who worked and helped me in this research work: Khatri Aadil
                Akhtarhusen, Mehta Urmit Raj, Modi Vraj Kamlesh, Shah Girraj Ashok
              </li>
              <li>
                I appreciate the efforts and mentoring of our faculty coordinator of The Faculty of Technology and
                Engineering, at The Maharaja Sayajirao University of Baroda, Dr. Akash B Pandey and Mr. Devasi Chocha.
                Under their guidance and support we are able to complete the research work.
              </li>
              <li>
                I am thankful to The Robotics & EV Club of The Faculty of Technology and Engineering, at The Maharaja
                Sayajirao University of Baroda, for supporting our work and bearing all expenses to it.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">References</h2>

            <h3 className="text-lg font-semibold text-foreground mb-2">Books:</h3>
            <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">
              <li>
                Albert D. Helfrick & William D. Cooper, Modern Electronics Instrumentation and Measuring Instruments
              </li>
              <li>M. Gopal, Control Systems (Principles and Design) 4e</li>
            </ol>

            <h3 className="text-lg font-semibold text-foreground mb-2">Journals:</h3>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>
                Corran, R. S. (1983). Impact loading of plates - An experimental investigation. International Journal of
                Impact Engineering, 1(1), 3-22.{" "}
                <a
                  href="https://doi.org/10.1016/0734-743X(83)90010-6"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1016/0734-743X(83)90010-6
                </a>
              </li>
              <li>
                Get rolling with Omni-directional wheels. Servo Magazine. (n.d.). Retrieved February 28, 2023, from{" "}
                <a
                  href="https://www.servomagazine.com/magazine/article/get-rolling-with-omni-directional-wheels"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.servomagazine.com/magazine/article/get-rolling-with-omni-directional-wheels
                </a>
              </li>
              <li>
                Magare, A. E., Yelve, N. P., Kulkarni, A. U., Kudva, A. P., & Ipparthi, D. A. (2008). DESIGN,
                FABRICATION AND TESTING OF VERTICAL A AND HORIZONTAL SURFACE TRAVERSING (VHST) ROBOT.
              </li>
            </ol>
          </section>
        </article>
      </div>
    </div>
  )
}
