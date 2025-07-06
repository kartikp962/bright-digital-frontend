import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  BarChart3,
  Bell,
  CheckCircle,
  MessageCircle,
  Plus,
} from "lucide-react";

export default function Features() {
  return (
    <section className="w-full px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            {/* FEATURES */}
            What Our Clients Say
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
            Hear it directly from them{" "}
            {/* <span className="block">ensure everything you needs</span> */}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {/* Maximize your team's productivity and security with our affordable,
            user-friendly contract management system. */}
            Proof that you don’t need to hustle on LinkedIn to see real results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dynamic Dashboard - Large Card */}
          {/* <div className="lg:col-span-2 rounded-2xl bg-muted/50 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Dynamic dashboard
                </h3>
                <p className="text-muted-foreground mb-6">
                  Clause helps legal teams work faster, smarter and more
                  efficiently, delivering the visibility and data-driven
                  insights to mitigate risk and ensure compliance.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Explore all
                </Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-foreground">Acme Inc.</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                        A
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-medium">
                        B
                      </div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-medium">
                        C
                      </div>
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-medium">
                        +3
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>6M</span>
                    <span>12</span>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    <div className="w-6 bg-muted rounded-t h-16"></div>
                    <div className="w-6 bg-muted rounded-t h-12"></div>
                    <div className="w-6 bg-muted rounded-t h-20"></div>
                    <div className="w-6 bg-muted rounded-t h-8"></div>
                    <div className="w-6 bg-primary rounded-t h-32"></div>
                    <div className="w-6 bg-muted rounded-t h-24"></div>
                    <div className="w-6 bg-muted rounded-t h-16"></div>
                    <div className="w-6 bg-muted rounded-t h-10"></div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Smart Notifications */}
          {/* <div className="rounded-2xl bg-muted/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Smart notifications
            </h3>
            <p className="text-muted-foreground mb-6">
              Easily accessible from the notifications center, calendar or email
              with the relevant activities.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-foreground mb-4">
                Email notification
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">
                    New messages, comment, or replies
                  </span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Social emails</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">
                    Announcement and Update
                  </span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Reminders</span>
                  <Switch defaultChecked />
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Save
              </Button>
            </div>
          </div> */}

          {/* Task Management */}
          {/* <div className="rounded-2xl bg-muted/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Task management
            </h3>
            <p className="text-muted-foreground mb-6">
              Discuss contract queries, manage tasks, secure approvals, track
              progress in the workspace.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Activity</h4>
                <Button variant="ghost" size="sm" className="text-primary">
                  <Plus className="w-4 h-4 mr-1" />
                  Message
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                    BS
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">Bill Sanders</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hello @Reggie Ditler, Could you sign the contract before
                      the March 15? Thank you in advance 😊
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-medium">
                    JC
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">Jane Cooper</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm text-muted-foreground">
                        Uploaded new contract
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Katerine Testimonial 1 */}
          <div className="rounded-2xl bg-muted p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Katerina Testimonial 1
            </h3>
            <p className="text-muted-foreground mb-6">
              I was getting decent engagement on my LinkedIn posts—but none of it was converting into actual customers.They converted my engagement into customers.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Katerina's Video Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                >
                </iframe>
              </div>
            </div>
          </div>


          {/*Anastasia Testimonial 2 */}
            <div className="rounded-2xl bg-muted p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Anastasia Testimonial 2
            </h3>
            <p className="text-muted-foreground mb-6">
              The way he crafted stories for both me and my company… Honestly, it was amazing.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Katerina's Video Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                >
                </iframe>
              </div>
            </div>
          </div>


          {/*Faton Testimonial 3 */}
          <div className="rounded-2xl bg-muted p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Faton Testimonial 3
            </h3>
            <p className="text-muted-foreground mb-6">
              I was struggling to generate leads for my company, but they took the time to understand my goals and delivered 5 qualified leads within just one week.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Katerina's Video Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                >
                </iframe>
              </div>
            </div>
          </div>


          {/*Alba Testimonial 4 */}
          <div className="rounded-2xl bg-muted p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Alba Testimonial 4
            </h3>
            <p className="text-muted-foreground mb-6">
              They completely transformed my LinkedIn profile and helped me position myself as a thought leader and generate qualified leads.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Katerina's Video Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
