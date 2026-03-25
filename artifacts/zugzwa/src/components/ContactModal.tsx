import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  details: z.string().min(10, "Please provide a bit more detail about your project"),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      details: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate network request since this is a static frontend
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setOpen(false);
    form.reset();
    
    toast({
      title: "Request Received",
      description: "We'll be in touch shortly to discuss your project.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] glass-panel bg-background/80 border-white/10 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Start a Project</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your vision. Our engineering team will review and get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white placeholder:text-white/30" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-destructive/80" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white placeholder:text-white/30" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-destructive/80" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Project Details</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What are you looking to build?" 
                      className="bg-white/5 border-white/10 focus-visible:ring-primary/50 min-h-[120px] text-white placeholder:text-white/30 resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-destructive/80" />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
