import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CheckCircle, AlertCircle, Upload, ChevronDown, Loader2 } from 'lucide-react';

import { 
 hiringFormSchema, 
 type HiringFormData,
} from '@/lib/validation';
import { submitHiringRequirement } from '@/lib/services';

const STEPS = [
 { id: 'company', label: 'Company', fields: ['companyName', 'contactPerson', 'designation', 'phone', 'email', 'location'] },
 { id: 'position', label: 'Position', fields: ['jobTitle', 'department', 'numberOfOpenings', 'jobLocation', 'workMode', 'employmentType'] },
 { id: 'candidate', label: 'Candidate', fields: ['qualification', 'experience', 'skills', 'salaryRange', 'joiningTimeline'] },
 { id: 'requirement', label: 'Requirement', fields: ['requirementDetails', 'jobDescription'] },
 { id: 'review', label: 'Review', fields: [] },
];

export default function HiringRequirementForm() {
 const [currentStep, setCurrentStep] = useState(0);
 const [direction, setDirection] = useState(1);
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
 const [errorMessage, setErrorMessage] = useState('');
 
 const fileInputRef = useRef<HTMLInputElement>(null);
 const [fileName, setFileName] = useState('');

 const {
  register,
  handleSubmit,
  trigger,
  watch,
  setValue,
  formState: { errors },
  reset
 } = useForm<HiringFormData>({
  resolver: zodResolver(hiringFormSchema),
  mode: 'onTouched',
  defaultValues: {
   workMode: 'On-site',
   employmentType: 'Full-time'
  }
 });

 const formValues = watch();

 const handleNext = async () => {
  const fieldsToValidate = STEPS[currentStep].fields as Array<keyof HiringFormData>;
  const isStepValid = await trigger(fieldsToValidate);
  
  if (isStepValid) {
   setDirection(1);
   setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  }
 };

 const handleBack = () => {
  setDirection(-1);
  setCurrentStep((prev) => Math.max(prev - 1, 0));
 };

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
   setFileName(file.name);
   setValue('jobDescription', file);
  }
 };

 const onSubmit = async (data: HiringFormData) => {
  // Honeypot check is handled by a hidden input in the form data
  if ((data as any).website) {
   setSubmitStatus('success'); // Silently succeed for bots
   setIsSubmitting(false);
   return;
  }

  setIsSubmitting(true);
  setSubmitStatus('idle');
  setErrorMessage('');

  try {
   const result = await submitHiringRequirement(data);
   if (result.success) {
    setSubmitStatus('success');
   } else {
    setSubmitStatus('error');
    setErrorMessage(result.message);
   }
  } catch (err) {
   setSubmitStatus('error');
   setErrorMessage('An unexpected error occurred. Please try again.');
  } finally {
   setIsSubmitting(false);
  }
 };

 const handleReset = () => {
  reset();
  setCurrentStep(0);
  setSubmitStatus('idle');
  setFileName('');
 };

 const slideVariants = {
  hiddenRight: { x: 50, opacity: 0 },
  hiddenLeft: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
  exitRight: { x: 50, opacity: 0, transition: { duration: 0.3 } },
  exitLeft: { x: -50, opacity: 0, transition: { duration: 0.3 } },
 };

 if (submitStatus === 'success') {
  return (
   <div className="bg-white rounded-2xl shadow-lg border border-slate-300 p-12 text-center">
    <div className="flex justify-center mb-6">
     <CheckCircle className="text-cyan-600 w-16 h-16" />
    </div>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">Form Completed (Demo)</h2>
    <p className="text-slate-600 mb-8 max-w-md mx-auto">
     Thank you for exploring the frontend demo. In a live environment, this requirement would be securely transmitted to our recruitment team for review.
    </p>
    <button
     onClick={handleReset}
     className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-600/90 transition-colors"
    >
     Submit Another Requirement
    </button>
   </div>
  );
 }

 return (
  <div className="bg-white rounded-2xl shadow-lg border border-slate-300 overflow-hidden">
   {/* Stepper Header */}
   <div className="bg-slate-50 border-b border-slate-300 p-6 md:px-10">
    {/* Mobile Stepper */}
    <div className="md:hidden flex items-center justify-between">
     <span className="text-sm font-medium text-slate-600">
      Step {currentStep + 1} of {STEPS.length}
     </span>
     <span className="text-sm font-bold text-slate-900">
      {STEPS[currentStep].label}
     </span>
    </div>
    
    {/* Desktop Stepper */}
    <div className="hidden md:flex items-center justify-between relative">
     <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-border-dark -z-0" />
     
     {STEPS.map((step, idx) => {
      const isCompleted = currentStep > idx;
      const isCurrent = currentStep === idx;
      const isFuture = currentStep < idx;
      
      return (
       <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-slate-50 px-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
         ${isCompleted ? 'bg-cyan-600 text-white' : ''}
         ${isCurrent ? 'bg-white border-2 border-cyan-600 text-cyan-600' : ''}
         ${isFuture ? 'bg-white border border-slate-300-dark text-slate-600' : ''}
        `}>
         {isCompleted ? <Check className="w-4 h-4" /> : (isCurrent ? <div className="w-2.5 h-2.5 rounded-full bg-cyan-600" /> : `0${idx + 1}`)}
        </div>
        <span className={`text-xs font-medium tracking-wide uppercase transition-colors
         ${isCompleted || isCurrent ? 'text-cyan-600' : 'text-slate-600'}
        `}>
         {step.label}
        </span>
       </div>
      );
     })}
    </div>
   </div>

   <form id="hiring-form" onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10">
    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

    <div className="min-h-[400px]">
     <AnimatePresence mode="wait" custom={direction}>
      <motion.div
       key={currentStep}
       custom={direction}
       variants={slideVariants}
       initial={direction === 1 ? 'hiddenRight' : 'hiddenLeft'}
       animate="visible"
       exit={direction === 1 ? 'exitLeft' : 'exitRight'}
      >
       {/* STEP 1: COMPANY */}
       {currentStep === 0 && (
        <div className="space-y-6">
         <h3 className="text-xl font-bold text-slate-900 mb-6">Company Information</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Company Name</label>
           <input
            {...register('companyName')}
            placeholder="e.g., Acme Technologies Pvt. Ltd."
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.companyName ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName.message as string}</p>}
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Contact Person</label>
           <input
            {...register('contactPerson')}
            placeholder="e.g., Jane Doe"
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.contactPerson ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.contactPerson && <p className="mt-1 text-sm text-red-500">{errors.contactPerson.message as string}</p>}
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Designation</label>
           <input
            {...register('designation')}
            placeholder="e.g., HR Director"
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.designation ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.designation && <p className="mt-1 text-sm text-red-500">{errors.designation.message as string}</p>}
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Phone</label>
           <input
            {...register('phone')}
            type="tel"
            placeholder="e.g., +1 (555) 000-0000"
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.phone ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message as string}</p>}
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Email</label>
           <input
            {...register('email')}
            type="email"
            placeholder="e.g., jane@acme.com"
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.email ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message as string}</p>}
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Location</label>
           <input
            {...register('location')}
            placeholder="e.g., New York, NY"
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.location ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location.message as string}</p>}
          </div>
         </div>
        </div>
       )}

       {/* STEP 2: POSITION */}
       {currentStep === 1 && (
        <div className="space-y-6">
         <h3 className="text-xl font-bold text-slate-900 mb-6">Position Details</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Job Title</label>
           <input
            {...register('jobTitle')}
            placeholder="e.g., Senior Software Engineer"
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.jobTitle ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.jobTitle && <p className="mt-1 text-sm text-red-500">{errors.jobTitle.message as string}</p>}
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Department (Optional)</label>
           <input
            {...register('department')}
            placeholder="e.g., Engineering"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
           />
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Number of Openings</label>
           <input
            {...register('numberOfOpenings')}
            type="number"
            placeholder="e.g., 3"
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.numberOfOpenings ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.numberOfOpenings && <p className="mt-1 text-sm text-red-500">{errors.numberOfOpenings.message as string}</p>}
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Job Location</label>
           <input
            {...register('jobLocation')}
            placeholder="e.g., Austin, TX"
            className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.jobLocation ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           />
           {errors.jobLocation && <p className="mt-1 text-sm text-red-500">{errors.jobLocation.message as string}</p>}
          </div>
          <div className="relative">
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Work Mode</label>
           <select
            {...register('workMode')}
            className={`appearance-none w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.workMode ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           >
            <option value="On-site">On-site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
           </select>
           <ChevronDown className="absolute right-4 top-10 w-4 h-4 text-slate-600 pointer-events-none" />
           {errors.workMode && <p className="mt-1 text-sm text-red-500">{errors.workMode.message as string}</p>}
          </div>
          <div className="relative">
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Employment Type</label>
           <select
            {...register('employmentType')}
            className={`appearance-none w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
             ${errors.employmentType ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
            `}
           >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
           </select>
           <ChevronDown className="absolute right-4 top-10 w-4 h-4 text-slate-600 pointer-events-none" />
           {errors.employmentType && <p className="mt-1 text-sm text-red-500">{errors.employmentType.message as string}</p>}
          </div>
         </div>
        </div>
       )}

       {/* STEP 3: CANDIDATE */}
       {currentStep === 2 && (
        <div className="space-y-6">
         <h3 className="text-xl font-bold text-slate-900 mb-6">Candidate Profile Requirements</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Qualification (Optional)</label>
           <input
            {...register('qualification')}
            placeholder="e.g., Bachelor's in Computer Science"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
           />
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Experience (Optional)</label>
           <input
            {...register('experience')}
            placeholder="e.g., 5-7 years"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
           />
          </div>
          <div className="md:col-span-2">
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Skills (Optional)</label>
           <textarea
            {...register('skills')}
            placeholder="e.g., React, TypeScript, Node.js"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10 resize-none min-h-[100px]"
           />
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Salary Range (Optional)</label>
           <input
            {...register('salaryRange')}
            placeholder="e.g., $100k - $120k"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
           />
          </div>
          <div>
           <label className="block text-sm font-medium text-slate-900 mb-1.5">Joining Timeline (Optional)</label>
           <input
            {...register('joiningTimeline')}
            placeholder="e.g., Immediate, 30 days"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
           />
          </div>
         </div>
        </div>
       )}

       {/* STEP 4: REQUIREMENT */}
       {currentStep === 3 && (
        <div className="space-y-6">
         <h3 className="text-xl font-bold text-slate-900 mb-6">Detailed Requirement</h3>
         <div>
          <label className="block text-sm font-medium text-slate-900 mb-1.5">
           Tell us about the role and the candidate you are looking for.
          </label>
          <textarea
           {...register('requirementDetails')}
           placeholder="Describe the day-to-day responsibilities, team structure, and any specific traits you value..."
           className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm resize-none min-h-[200px]
            ${errors.requirementDetails ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
           `}
          />
          {errors.requirementDetails && <p className="mt-1 text-sm text-red-500">{errors.requirementDetails.message as string}</p>}
         </div>
         
         <div>
          <label className="block text-sm font-medium text-slate-900 mb-1.5">Upload Job Description (Optional)</label>
          <div 
           className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50 hover:bg-border/30 transition cursor-pointer"
           onClick={() => fileInputRef.current?.click()}
          >
           <Upload className="w-8 h-8 text-slate-600 mx-auto mb-3" />
           <p className="text-sm font-medium text-slate-900 mb-1">Drag & drop or click to upload</p>
           <p className="text-xs text-slate-600">Accepts .pdf, .doc, .docx</p>
           {fileName && <p className="mt-3 text-sm text-cyan-600 font-medium">{fileName}</p>}
           <input
            type="file"
            ref={fileInputRef}
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="hidden"
            onChange={handleFileChange}
           />
          </div>
         </div>
        </div>
       )}

       {/* STEP 5: REVIEW */}
       {currentStep === 4 && (
        <div className="space-y-8">
         <h3 className="text-xl font-bold text-slate-900 mb-2">Review & Submit</h3>
         
         {/* Company Details */}
         <div className="border border-slate-300 rounded-xl p-6 bg-slate-50">
          <div className="flex justify-between items-center mb-4">
           <h4 className="font-bold text-slate-900">Company Information</h4>
           <button type="button" onClick={() => { setDirection(-1); setCurrentStep(0); }} className="text-cyan-600 text-sm font-medium hover:underline">Edit</button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
           <div><span className="text-slate-600 block">Company</span><span className="font-medium text-slate-900">{formValues.companyName}</span></div>
           <div><span className="text-slate-600 block">Contact Person</span><span className="font-medium text-slate-900">{formValues.contactPerson}</span></div>
           <div><span className="text-slate-600 block">Designation</span><span className="font-medium text-slate-900">{formValues.designation}</span></div>
           <div><span className="text-slate-600 block">Phone</span><span className="font-medium text-slate-900">{formValues.phone}</span></div>
           <div><span className="text-slate-600 block">Email</span><span className="font-medium text-slate-900">{formValues.email}</span></div>
           <div><span className="text-slate-600 block">Location</span><span className="font-medium text-slate-900">{formValues.location}</span></div>
          </div>
         </div>

         {/* Position Details */}
         <div className="border border-slate-300 rounded-xl p-6 bg-slate-50">
          <div className="flex justify-between items-center mb-4">
           <h4 className="font-bold text-slate-900">Position Details</h4>
           <button type="button" onClick={() => { setDirection(-1); setCurrentStep(1); }} className="text-cyan-600 text-sm font-medium hover:underline">Edit</button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
           <div><span className="text-slate-600 block">Job Title</span><span className="font-medium text-slate-900">{formValues.jobTitle}</span></div>
           <div><span className="text-slate-600 block">Department</span><span className="font-medium text-slate-900">{formValues.department || '-'}</span></div>
           <div><span className="text-slate-600 block">Openings</span><span className="font-medium text-slate-900">{formValues.numberOfOpenings}</span></div>
           <div><span className="text-slate-600 block">Location</span><span className="font-medium text-slate-900">{formValues.jobLocation}</span></div>
           <div><span className="text-slate-600 block">Work Mode</span><span className="font-medium text-slate-900">{formValues.workMode}</span></div>
           <div><span className="text-slate-600 block">Type</span><span className="font-medium text-slate-900">{formValues.employmentType}</span></div>
          </div>
         </div>

         {submitStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
           <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
           <div>
            <h4 className="text-sm font-medium text-red-800">Submission failed</h4>
            <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
           </div>
          </div>
         )}
        </div>
       )}
      </motion.div>
     </AnimatePresence>
    </div>

    {/* Navigation */}
    <div className="mt-8 pt-6 border-t border-slate-300 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">
     <button
      type="button"
      onClick={handleBack}
      className={`w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-lg font-medium transition-colors text-sm
       ${currentStep === 0 ? 'opacity-0 hidden sm:block pointer-events-none' : 'text-slate-900 hover:bg-slate-50 border border-slate-300'}
      `}
     >
      Back
     </button>
     
     {currentStep < STEPS.length - 1 ? (
      <button
       type="button"
       onClick={handleNext}
       className="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-600/90 transition-colors text-sm"
      >
       Continue
      </button>
     ) : (
      <button
       type="submit"
       disabled={isSubmitting}
       className="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-600/90 transition-colors text-sm flex items-center justify-center gap-2 disabled:opacity-70"
      >
       {isSubmitting ? (
        <>
         <Loader2 className="w-4 h-4 animate-spin" />
         Submitting...
        </>
       ) : (
        'Submit Hiring Requirement'
       )}
      </button>
     )}
    </div>
   </form>
  </div>
 );
}
