export interface Review {
    id: number;
    rating: number;
    comment: string;
    ratingUser: {
        id: number;
        firstName: string;
        lastName: string;
        userName: string;
        password: string;
        email: string;
        role: string;
      };
    ratingRestaurant: {
        id: number;
        name: string;
        address: string;
        description: string;
    };
}