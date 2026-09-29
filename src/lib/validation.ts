import { z } from 'zod';

export const companyStepSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  designation: z.string().min(2, 'Designation is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  location: z.string().min(2, 'Location is required'),
});

export const positionStepSchema = z.object({
  jobTitle: z.string().min(2, 'Job title is required'),
  department: z.string().optional(),
  numberOfOpenings: z.string().min(1, 'Number of openings is required'),
  jobLocation: z.string().min(2, 'Job location is required'),
  workMode: z.enum(['On-site', 'Remote', 'Hybrid'], {
    errorMap: () => ({ message: 'Select a work mode' }),
  }),
  employmentType: z.enum(['Full-time', 'Part-time', 'Contract', 'Temporary'], {
    errorMap: () => ({ message: 'Select employment type' }),
  }),
});

export const candidateStepSchema = z.object({
  qualification: z.string().optional(),
  experience: z.string().optional(),
  skills: z.string().optional(),
  salaryRange: z.string().optional(),
  joiningTimeline: z.string().optional(),
});

export const requirementStepSchema = z.object({
  requirementDetails: z.string().min(10, 'Please describe the requirement'),
  jobDescription: z.any().optional(),
});

export const hiringFormSchema = companyStepSchema
  .merge(positionStepSchema)
  .merge(candidateStepSchema)
  .merge(requirementStepSchema);

export type CompanyStepData = z.infer<typeof companyStepSchema>;
export type PositionStepData = z.infer<typeof positionStepSchema>;
export type CandidateStepData = z.infer<typeof candidateStepSchema>;
export type RequirementStepData = z.infer<typeof requirementStepSchema>;
export type HiringFormData = z.infer<typeof hiringFormSchema>;

export const candidateFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  location: z.string().min(2, 'Location is required'),
  qualification: z.string().optional(),
  experience: z.string().optional(),
  currentRole: z.string().optional(),
  skills: z.string().optional(),
  preferredRole: z.string().optional(),
  resume: z.any().optional(),
  additionalInfo: z.string().optional(),
});

export type CandidateFormData = z.infer<typeof candidateFormSchema>;
