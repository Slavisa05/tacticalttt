"use client"

import { useEffect, useState } from "react"
import { Locale } from "@/i18n.config";
import { getCourses } from "@/data/courses";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Button from "../ui/Button";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type CourseTabCategory = "basic" | "advanced" | "special" | "medical" | "military";

interface CourseTabsProps {
    lang: Locale;
    category?: CourseTabCategory;
}

export default function CourseTabs({ lang, category }: CourseTabsProps) {
    const [activeTab, setActiveTab] = useState(0);
    const courses = getCourses(lang);
    const filteredCourses = category ? courses.filter((course) => course.type === category) : courses;

    useEffect(() => {
        setActiveTab(0);
    }, [lang, category]);

    if (filteredCourses.length === 0) {
        return null;
    }

    return(
        <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
            <TabList className="w-full grid grid-cols-2 md:flex md:flex-wrap gap-5 mb-15">
                {filteredCourses.map((course, index) => (
                    <Tab key={course.heading}>
                        <Button
                            className="w-full whitespace-normal leading-tight text-center"
                            text={course.label}
                            variant={activeTab === index ? "primary" : "secondary"}
                        />
                    </Tab>
                ))}
            </TabList>

            {filteredCourses.map((course) => (
                <TabPanel key={`${course.heading}-panel`}>
                    <article className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5">
                        <h3 className="text-xl font-semibold">{course.heading}</h3>
                        <Image 
                            src={course.image}
                            alt={course.alt}
                            width={600} height={400}
                            className="w-full rounded-xl"
                        />
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                p: ({ children }) => <p className="opacity-90 leading-relaxed mb-3 last:mb-0">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc pl-6 space-y-1 mb-3">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal pl-6 space-y-1 mb-3">{children}</ol>,
                                li: ({ children }) => <li className="opacity-90">{children}</li>,
                                strong: ({ children }) => <strong className="font-semibold text-green-color">{children}</strong>,
                                a: ({ children, href }) => (
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="underline underline-offset-4"
                                    >
                                        {children}
                                    </a>
                                ),
                            }}
                        >
                            {course.desc}
                        </ReactMarkdown>
                    </article>
                </TabPanel>
            ))}
        </Tabs>
    )
}