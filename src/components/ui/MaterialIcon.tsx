import React from 'react';

interface MaterialIconProps {
  icon: string;
  className?: string;
  fill?: boolean;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ icon, className = '', fill = false }) => {
  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}
    >
      {icon}
    </span>
  );
};

export default MaterialIcon;
