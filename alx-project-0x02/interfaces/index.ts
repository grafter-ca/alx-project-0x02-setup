export interface CardProps {
  title: string;
  content: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}


export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
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

export interface PostProps {
  id?: string;
  userId: string;
  title: string;
  body: string;
}