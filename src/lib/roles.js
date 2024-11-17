export const ROLES = {
      SUPER_ADMIN: 'super_admin',
      ANALYST: 'analyst',
      DIRECTOR: 'director',
      HEAD_TEACHER: 'head_teacher',
      SECRETARY: 'secretary',
      TEACHER: 'teacher',
      CURATOR: 'curator',
      MEDICAL_WORKER: 'medical_worker',
      PSYCHOLOGIST: 'psychologist',
      SPEECH_THERAPIST: 'speech_therapist',
      PARENT: 'parent',
      STUDENT: 'student'
    }

    export const ROLE_PERMISSIONS = {
      [ROLES.SUPER_ADMIN]: {
        canManageUsers: true,
        canManageRoles: true,
        canManagePermissions: true,
        canViewAnalytics: true,
        canManageSchedule: true,
        canManageGrades: true,
        canModerateContent: true,
        canManageLibrary: true,
        canManageNews: true
      },
      [ROLES.ANALYST]: {
        canViewAnalytics: true,
        canViewChats: true,
        canEditInfo: true,
        canModerateGrades: true
      },
      [ROLES.DIRECTOR]: {
        canViewAnalytics: true,
        canManageUsers: true,
        canManageSchedule: true,
        canViewChats: true,
        canManageNews: true
      },
      [ROLES.TEACHER]: {
        canManageGrades: true,
        canViewSchedule: true,
        canCreateHomework: true,
        canViewChats: true,
        canViewLibrary: true
      },
      [ROLES.STUDENT]: {
        canViewGrades: true,
        canViewSchedule: true,
        canViewHomework: true,
        canViewLibrary: true,
        canViewChats: true
      },
      [ROLES.PARENT]: {
        canViewGrades: true,
        canViewSchedule: true,
        canViewHomework: true,
        canViewChats: true
      }
    }

    export const hasPermission = (userRole, permission) => {
      return ROLE_PERMISSIONS[userRole]?.[permission] || false
    }
