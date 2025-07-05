import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function FloatingResume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // In a real implementation, this would generate and download a PDF
      // For now, we'll simulate the download process

      window.open(
        "https://drive.google.com/file/d/1DrSIOuymrC6EigHMQLHELW5CBL41bGL-/view?usp=sharing",
        "_blank"
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Resume Downloaded",
        description: "Your resume has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 group transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      <Button
        onClick={handleDownload}
        disabled={isDownloading}
        className="bg-accent hover:bg-cyan-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group relative animate-pulse hover:animate-none hover:scale-110"
        size="lg"
      >
        <Download
          className={`w-6 h-6 transition-transform ${
            isDownloading ? "animate-spin" : "group-hover:scale-110"
          }`}
        />

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Download Resume
        </div>

        {/* Floating animation rings */}
        <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full border border-cyan-400 animate-pulse opacity-30"></div>
      </Button>
    </div>
  );
}
