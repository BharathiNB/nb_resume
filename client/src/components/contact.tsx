import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contactInfoRef, contactInfoVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { name, email, subject, message } = data;
      // await apiRequest("POST", "/api/contact", data);
      window.open(
        `https://wa.me/8489686346?text=Hello%20Bharathi%20%F0%9F%99%8C%0A%0AMy%20name%20is%20${name}%0A%0A%F0%9F%93%A8%20Email%3A%20${email}%0A%F0%9F%97%82%EF%B8%8F%20Subject%3A%20${subject}%0A%F0%9F%93%9D%20Message%3A%20${message}`
      );
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 fade-in ${
            titleVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can
            build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            ref={contactInfoRef}
            className={`slide-in-left ${contactInfoVisible ? "animate" : ""}`}
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">
              <div
                className={`flex items-center p-4 bg-white rounded-xl shadow-sm hover-lift fade-in stagger-delay-1 ${
                  contactInfoVisible ? "animate" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary">Email</h4>
                  <p className="text-gray-600">bharathinb14@gmail.com</p>
                </div>
              </div>

              <div
                className={`flex items-center p-4 bg-white rounded-xl shadow-sm hover-lift fade-in stagger-delay-2 ${
                  contactInfoVisible ? "animate" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary">Phone</h4>
                  <p className="text-gray-600">+91 8489686346</p>
                </div>
              </div>

              <div
                className={`flex items-center p-4 bg-white rounded-xl shadow-sm hover-lift fade-in stagger-delay-3 ${
                  contactInfoVisible ? "animate" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary">
                    Location
                  </h4>
                  <p className="text-gray-600">Chennai, India</p>
                </div>
              </div>

              <div
                className={`flex items-center p-4 bg-white rounded-xl shadow-sm hover-lift fade-in stagger-delay-4 ${
                  contactInfoVisible ? "animate" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary">
                    LinkedIn
                  </h4>
                  <a
                    href="https://linkedin.com/in/bharathinb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-blue-600 transition-colors"
                  >
                    Bharathi NB
                  </a>
                </div>
              </div>
            </div>

            {/* Meeting Booking */}
            <div
              className="mt-8 p-6 bg-gradient-to-r from-secondary to-accent rounded-xl text-white"
              style={{ display: "none" }}
            >
              <h4 className="text-xl font-bold mb-3">Book a Consultation</h4>
              <p className="mb-4">
                Schedule a free 30-minute consultation to discuss your project
                requirements.
              </p>
              <Button className="bg-white text-secondary hover:bg-gray-100">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`slide-in-right ${formVisible ? "animate" : ""}`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Send Message
              </h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Project discussion" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-blue-600"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
