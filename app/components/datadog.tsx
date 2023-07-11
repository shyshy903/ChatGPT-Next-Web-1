"use client";

import { datadogRum } from "@datadog/browser-rum";

import { useEffect } from "react";

export function DataLog() {
  useEffect(() => {
    datadogRum.init({
      applicationId: "bdaedda0-a21d-4e77-979f-2a063ff5d9ca",
      clientToken: "pube5ab573dbc6e966aeea9ee2d4ddfe233",
      site: "us5.datadoghq.com",
      service: "datamesh",
      env: "website1",
      // Specify a version number to identify the deployed version of your application in Datadog
      // version: '1.0.0',
      sessionSampleRate: 100,
      premiumSampleRate: 100,
      trackUserInteractions: true,
      defaultPrivacyLevel: "mask-user-input",
    });
    datadogRum.startSessionReplayRecording();
  });
  return <div></div>;
}