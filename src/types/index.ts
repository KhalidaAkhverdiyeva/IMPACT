export interface ControlButtonsProps {
    activeIndex: number;
    sectionsLength: number;
    handleSectionClick: (index: number) => void;
  }
  

  export type CartItem = {
    _id: string;
    productId: string;
    colorId: string;
    quantity: number;
  };

  export interface AccordionProps {
    title: string;
    content: string;
    isLast?: boolean;
  }


  export interface WebInfoModalProps extends InfoModalProps {
    top: string;
    left: string;
  }
  
  export interface ModalInfo {
    iconImg: string;
    altImg: string;
    title: string;
    info: string;
  }
  
  export interface InfoModalProps {
    modalInfo: ModalInfo | null;
    closeBottomDiv: () => void;
    isClosing?: boolean;
    top?: string;
    left?: string;
  }

  export interface Language {
    flag: string;
    country: string;
    currency: string;
    locale: string;
  }
  
  export interface ModalProps {
    image: string;
    onClose: () => void;
    currentIndex: number;
    totalImages: number;
    onPrev: () => void;
    onNext: () => void;
  }

  export interface ProductParams {
    locale: string;
    title: string;
  }
  export interface ColorVariant {
    color: string;
    mainImage: string;
    hoverImage: string;
    detailImages: string[];
    _id: string;
  }
  
  export interface Product {
    _id: string;
    id: string;
    title: string;
    designer: string;
    productType: string;
    colorVariants: ColorVariant[];
    dimensions: string;
    material: string;
    colors: string;
    currency: string;
    price: number;
    oldPrice?: number;
    rating: number;
    isNewProduct: boolean;
    isSoldOut: boolean;
    discountPercent: number;
    availableUnits: number;
    descriptionTitle: string;
    descriptionText: string;
  }

  export interface SliderControllerButtonProps {
    goToPrevSlide: () => void;
    goToNextSlide: () => void;
  }

  export interface EnrichedCartItemType {
    _id: string;
    productId: string;
    colorId: string;
    quantity: number;
    product: Product;
  }
  
  export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (
      productId: string,
      quantity: number,
      colorId: string
    ) => void;
    isLoading: boolean;
    error: string | null;
    cartTotal: number;
    products: Record<string, Product>;
    fetchCart: () => Promise<void>;
     enrichedCartItems: EnrichedCartItemType[]; 

  }

 export interface FilterSectionProps {
    color: string | null;
    designer: string | null;
    type: string | null;
    setColor: (color: string | null) => void;
    setDesigner: (designer: string | null) => void;
    setType: (type: string | null) => void;
  }

  export interface ProductDetailPageProps {
    params: ProductParams;
  }
  export interface PlusButtonsProps {
    toggleBottomDiv: (modalInfo: ModalInfo, buttonId: string) => void;
  }
  

  export interface ProductGridProps {
    products: Product[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  }

  export interface ProductDetailSwiperProps {
    product: Product;
    variantIndex: number;
  }

  export interface ToasterPlusButtonsProps {
    toggleBottomDiv: (modalInfo: ModalInfo, buttonId: string) => void;
  }

  
  export interface SmallProductCardsProps {
    colorId: string;
    quantity: number;
    productId: string;
    _id: string; 

  }

export interface ColorVariant {
  _id: string;
  color: string;
  mainImage: string;
}
  
  
 export  interface AddToCartSidebarProps {
    isAddToCartOpen: boolean;
    setIsAddCartOpen: (isOpen: boolean) => void;
  }
  
  export interface AccordionFilterProps {
    setColor: (color: string | null) => void;
    setDesigner: (designer: string | null) => void;
    setType: (type: string | null) => void;
    setMinPrice: (price: number) => void;
    setMaxPrice: (price: number) => void;
    setInStock: (inStock: boolean) => void;
    currentColor: string | null;
    currentDesigner: string | null;
    currentType: string | null;
    currentMinPrice: number;
    currentMaxPrice: number;
    currentInStock: boolean;
  }
  

  export type BlogPost = {
    id: string;
    title: string;
    description: string;
    content: string | { text: string; isBold: boolean }[];
    image: string;
    category: string;
    date: string;
    comments: string;
    additionalImages: string[];
    backgroundColor: string;
  };


  