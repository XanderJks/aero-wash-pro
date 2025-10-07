import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  company: z.string().trim().min(1, { message: "Company name is required" }).max(100, { message: "Company name must be less than 100 characters" }),
  phone: z.string().trim().min(1, { message: "Phone number is required" }).max(20, { message: "Phone number must be less than 20 characters" }),
  industry: z.string().min(1, { message: "Please select an industry" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);
      setErrors({});

      // Send to Make.com webhook
      const response = await fetch('https://hook.eu2.make.com/gw2tmaxxizftf5ba8j8ehbwuv47tlb3a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Demo Request Submitted",
          description: "Thank you! Our sales team will contact you within 24 hours with pricing and demo options.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          industry: "",
          message: "",
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);

        toast({
          title: "Validation Error",
          description: "Please check the form and correct any errors.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Submission Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary">
                Get pricing
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Request a demo, specifications, and pricing. Our team responds within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <div className="font-bold text-primary mb-1">Response Time</div>
                  <div className="text-gray-700">24 hours or less</div>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <div className="font-bold text-primary mb-1">Shipping</div>
                  <div className="text-gray-700">Worldwide delivery available</div>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <div className="font-bold text-primary mb-1">Demo</div>
                  <div className="text-gray-700">Remote or on-site demonstration</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 border-2 border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Smith"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@company.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Your Company Inc."
                      className={errors.company ? "border-destructive" : ""}
                    />
                    {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (234) 567-890"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)}>
                    <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cleaning-service">Building Cleaning Service</SelectItem>
                      <SelectItem value="facility-management">Facility Management</SelectItem>
                      <SelectItem value="solar-maintenance">Solar Farm Operator</SelectItem>
                      <SelectItem value="wind-energy">Wind Energy Company</SelectItem>
                      <SelectItem value="property-management">Property Management</SelectItem>
                      <SelectItem value="entrepreneur">Entrepreneur/Startup</SelectItem>
                      <SelectItem value="other">Other Industry</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.industry && <p className="text-sm text-destructive">{errors.industry}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your business *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="What type of cleaning business do you run? How many buildings do you service monthly? Are you starting new or expanding?"
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <button type="submit" className="w-full bg-primary text-white px-8 py-4 font-semibold hover:bg-primary/90 transition-colors">
                  SUBMIT REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
