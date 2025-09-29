import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Calendar, Building } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-6 max-w-4xl">
          <GraduationCap className="h-16 w-16 text-primary-foreground mx-auto" />
          <h1 className="text-5xl font-bold text-primary-foreground">
            Campus Placement Portal
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Connecting students, mentors, placement officers, and employers in a seamless 
            placement management ecosystem
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center space-y-2">
              <GraduationCap className="h-8 w-8 text-primary-foreground mx-auto" />
              <p className="text-primary-foreground font-medium">Students</p>
              <p className="text-primary-foreground/60 text-sm">Apply for jobs</p>
            </div>
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 text-primary-foreground mx-auto" />
              <p className="text-primary-foreground font-medium">Mentors</p>
              <p className="text-primary-foreground/60 text-sm">Review applications</p>
            </div>
            <div className="text-center space-y-2">
              <Calendar className="h-8 w-8 text-primary-foreground mx-auto" />
              <p className="text-primary-foreground font-medium">Officers</p>
              <p className="text-primary-foreground/60 text-sm">Schedule interviews</p>
            </div>
            <div className="text-center space-y-2">
              <Building className="h-8 w-8 text-primary-foreground mx-auto" />
              <p className="text-primary-foreground font-medium">Employers</p>
              <p className="text-primary-foreground/60 text-sm">Post opportunities</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
