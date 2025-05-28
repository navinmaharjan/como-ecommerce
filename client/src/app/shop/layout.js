
import BreadCrumbComponent from "@/components/BreadCrumbComponent";
import Container from "@/components/Container";

const layout = ({ children }) => {
    return (
        <div>
            <div className="py-2">
                <Container>
                    <BreadCrumbComponent />
                </Container>
            </div>

            {children}
        </div>
    );
};

export default layout;
