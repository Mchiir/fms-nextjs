// sideItems.tsx
import { FaTachometerAlt, FaBook, FaUser, FaComments,FaCalendarAlt, FaCogs, FaBell, FaSignOutAlt } from 'react-icons/fa';
import { ReactNode } from 'react';

// Define the type for each sidebar item
export interface SideItemType {
  name: string;
  icon: ReactNode;  // Icon can be any ReactNode (JSX element)
  href: string;
}

export const sideItems: SideItemType[] = [
  { name: 'Dashboard', icon: <FaTachometerAlt />, href: '/' },
  { name: 'Curriculum', icon: <FaBook />, href: '/curriculum' },
  { name: 'Students', icon: <FaUser />, href: '/students' },
  { name: 'Chat', icon: <FaComments />, href: '/chat' },
  { name: 'Notifications', icon: <FaBell />, href: '/notifications' },
  { name: 'Schedule', icon: <FaCalendarAlt />, href: '/schedule' }, 
  { name: 'Settings', icon: <FaCogs />, href: '/settings' },
  { name: 'Log Out', icon: <FaSignOutAlt />, href: '/logout' },
];
