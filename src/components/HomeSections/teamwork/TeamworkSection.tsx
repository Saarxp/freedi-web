"use client";

import React from "react";
import teamwork from "@/assets/Images/teamwork.png";
import Image from "next/image";
import DefaultButton from "@/components/buttons/DefaultButton";

export default function TeamworkSection({
    currentLang,
    direction,
}: {
    currentLang: Record<string, string>;
    direction: "rtl" | "ltr";
}) {
    return (
        <section className="defaultSection">
            <div className="sectionTextBox" style={{ direction }}>
                <h3 className="sectionTitle">
                    {
                        currentLang[
                            "Make future-proof decisions today to shape a better tomorrow."
                        ]
                    }
                </h3>
                <p className="sectionText">
                    {
                        currentLang[
                            "Invest effort/time into an in-depth deliberative process with DeliCol app help that enables the end choices to effectively address and serve the requirements and priorities of the entire community."
                        ]
                    }
                </p>
                <DefaultButton
                    type="primary"
                    text={currentLang["Contact us"]}
                />
            </div>
            <Image
                alt="teamwork-image"
                src={teamwork}
                sizes="20vw"
                quality={100}
                unoptimized
                style={{ width: "30vw", height: "auto" }}
            />
        </section>
    );
}
