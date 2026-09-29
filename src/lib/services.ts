import type { HiringFormData, CandidateFormData } from './validation';

/**
 * Submit a hiring requirement.
 * Currently logs to console. Ready for future CRM API integration.
 */
export async function submitHiringRequirement(
  data: HiringFormData
): Promise<{ success: boolean; message: string }> {
  // Simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In production, this would POST to the CRM API
  console.log('[Genius HR - FRONTEND DEMO] Hiring requirement logged locally:', data);

  return {
    success: true,
    message:
      'Thank you. Our recruitment team will review the information and contact you regarding the requirement.',
  };
}

/**
 * Submit a candidate profile.
 * Currently logs to console. Ready for future CRM API integration.
 */
export async function submitCandidateProfile(
  data: CandidateFormData
): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('[Genius HR - FRONTEND DEMO] Candidate profile logged locally:', data);

  return {
    success: true,
    message:
      'Thank you. Your profile has been received and will be considered for relevant opportunities.',
  };
}
