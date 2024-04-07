import ContentCard from "../components/contentCard";

export default function CourseContent() {
    return (
        <div className="bg-gray-200 min-h-screen py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Course Title</h1>
            <div className="grid grid-cols-1 gap-6">
                <ContentCard img="card2.jpg" title="Introduction to React" des="Basics of React for frontend beginners" />
                <ContentCard img="card2.jpg" title="Introduction to React" des="Basics of React for frontend beginners" />
                <ContentCard img="card2.jpg" title="Introduction to React" des="Basics of React for frontend beginners" />
                <ContentCard img="card2.jpg" title="Introduction to React" des="Basics of React for frontend beginners" />
                <ContentCard img="card2.jpg" title="Introduction to React" des="Basics of React for frontend beginners" />
                <ContentCard img="card2.jpg" title="Introduction to React" des="Basics of React for frontend beginners" />
                <ContentCard img="card2.jpg" title="Introduction to React" des="Basics of React for frontend beginners" />
                <ContentCard img="card2.jpg" title="Introduction to React" des="Basics of React for frontend beginners" />
            </div>
        </div>
    );
}