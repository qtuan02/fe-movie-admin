import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface IPaginationProps {
    page: number;
    total_pages: number;
    onPageChange: (page: number) => void;
}

const CPagination: React.FC<IPaginationProps> = (props) => {
    const { page, total_pages, onPageChange } = props;

    const handlePageChange = (page: number) => {
        if (onPageChange && page > 0 && page <= total_pages) {
            onPageChange(page);
        }
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>    
                    <PaginationPrevious className="cursor-pointer" onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page - 1)}} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>
                        {`${page} / ${total_pages}`}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className="cursor-pointer" onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page + 1)}} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default CPagination;