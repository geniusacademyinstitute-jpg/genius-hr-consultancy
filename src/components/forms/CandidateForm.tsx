import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle, Upload, Loader2 } from 'lucide-react';

import { 
 candidateFormSchema, 
 type CandidateFormData,
} from '@/lib/validation';
import { submitCandidateProfile } from '@/lib/services';

export default function CandidateForm() {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
 const [errorMessage, setErrorMessage] = useState('');
 
 const fileInputRef = useRef<HTMLInputElement>(null);
 const [fileName, setFileName] = useState('');

 const {
  register,
  handleSubmit,
  setValue,
  formState: { errors },
  reset
 } = useForm<CandidateFormData>({
  resolver: zodResolver(candidateFormSchema),
  mode: 'onTouched',
 });

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
   setFileName(file.name);
   setValue('resume', file);
  }
 };

 const onSubmit = async (data: CandidateFormData) => {
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
   const result = await submitCandidateProfile(data);
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
  setSubmitStatus('idle');
  setFileName('');
 };

 if (submitStatus === 'success') {
  return (
   <div className="bg-white rounded-2xl shadow-lg border border-slate-300 p-12 text-center">
    <div className="flex justify-center mb-6">
     <CheckCircle className="text-cyan-600 w-16 h-16" />
    </div>
    <h2 className="text-2xl font-bold text-slate-900 mb-4">Form Completed (Demo)</h2>
    <p className="text-slate-600 mb-8 max-w-md mx-auto">
     Thank you for exploring the frontend demo. In a live environment, your profile would be securely received and considered for relevant opportunities.
    </p>
    <button
     onClick={handleReset}
     className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-600/90 transition-colors"
    >
     Submit Another Profile
    </button>
   </div>
  );
 }

 return (
  <div className="bg-white rounded-2xl shadow-lg border border-slate-300 p-8 md:p-10">
   <h2 className="text-2xl font-bold text-slate-900 mb-8">Submit Your Profile</h2>
   
   <form id="candidate-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div>
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Full Name</label>
      <input
       {...register('fullName')}
       placeholder="e.g., John Doe"
       className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
        ${errors.fullName ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
       `}
      />
      {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName.message as string}</p>}
     </div>
     <div>
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Email</label>
      <input
       {...register('email')}
       type="email"
       placeholder="e.g., john@example.com"
       className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
        ${errors.email ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
       `}
      />
      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message as string}</p>}
     </div>
     <div>
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Phone</label>
      <input
       {...register('phone')}
       placeholder="e.g., +1 (555) 000-0000"
       className={`w-full px-4 py-3 rounded-lg border bg-white outline-none transition text-sm
        ${errors.phone ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-300 focus:border-cyan-600 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-indigo/10'}
       `}
      />
      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message as string}</p>}
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
     <div>
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Qualification (Optional)</label>
      <input
       {...register('qualification')}
       placeholder="e.g., Master's in Business"
       className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
      />
     </div>
     <div>
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Experience (Optional)</label>
      <input
       {...register('experience')}
       placeholder="e.g., 5 years"
       className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
      />
     </div>
     <div>
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Current Role (Optional)</label>
      <input
       {...register('currentRole')}
       placeholder="e.g., Product Manager"
       className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
      />
     </div>
     <div>
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Preferred Role (Optional)</label>
      <input
       {...register('preferredRole')}
       placeholder="e.g., Senior Product Manager"
       className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10"
      />
     </div>
     <div className="md:col-span-2">
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Skills (Optional)</label>
      <textarea
       {...register('skills')}
       placeholder="List your key skills, tools, and technologies..."
       className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10 resize-none min-h-[100px]"
      />
     </div>
     <div className="md:col-span-2">
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Additional Information (Optional)</label>
      <textarea
       {...register('additionalInfo')}
       placeholder="Any other details you'd like to share..."
       className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none transition text-sm focus:border-cyan-600 focus:ring-2 focus:ring-indigo/10 resize-none min-h-[100px]"
      />
     </div>
     
     <div className="md:col-span-2">
      <label className="block text-sm font-medium text-slate-900 mb-1.5">Upload Resume (Optional)</label>
      <div 
       className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50 hover:bg-border/30 transition cursor-pointer"
       onClick={() => fileInputRef.current?.click()}
      >
       <Upload className="w-8 h-8 text-slate-500 mx-auto mb-3" />
       <p className="text-sm font-medium text-slate-900 mb-1">Drag & drop or click to upload</p>
       <p className="text-xs text-slate-500">Accepts .pdf, .doc, .docx</p>
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

    {submitStatus === 'error' && (
     <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
      <div>
       <h4 className="text-sm font-medium text-red-800">Submission failed</h4>
       <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
      </div>
     </div>
    )}

    <div>
     <div className="bg-cyan-50 border border-cyan-600/20 rounded-lg p-4 mb-6">
      <p className="text-sm text-slate-500">
       <span className="font-medium text-cyan-600 block mb-1">Important Disclaimer</span>
       Submitting your profile does not guarantee employment or an interview. Profiles are considered for relevant opportunities based on available vacancies and employer requirements.
      </p>
     </div>
     
     <div className="flex justify-end">
      <button
       type="submit"
       disabled={isSubmitting}
       className="px-8 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-600/90 transition-colors text-sm flex items-center gap-2 disabled:opacity-70"
      >
       {isSubmitting ? (
        <>
         <Loader2 className="w-4 h-4 animate-spin" />
         Submitting...
        </>
       ) : (
        'Submit Profile'
       )}
      </button>
     </div>
    </div>
   </form>
  </div>
 );
}
