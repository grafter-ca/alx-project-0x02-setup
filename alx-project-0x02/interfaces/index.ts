export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface HeaderProps {
  title: string;
  links: {
     href: string; 
     label: string 
    }[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CardProps) => void;
}