export const getCategoryName = (category) => {
  switch (category) {
    case 'BlogPost': return 'Blog Post';
    break;
    case 'TechArticle': return 'Technical Article';
    break;
    case 'BookReview': return 'Book Review';
    break;
    default: return category;
  }

}