let obj=JSON.parse($response.body)
obj.appLicenseMode = "PAID";
obj.legacyProfile = "{\"licenseId\":\"E048E402B5A7AFD9FB3A\",\"licenseType\":3,\"licenseVersion\":\"90.0\",\"effectiveEndTimestamp\":32501289540000,\"graceTime\":432000000,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":45,\"serialKey\":\"911900138127842952847770\",\"clearSerialKey\":\"10454831434290314072\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":454044,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":false}}";
obj.relationshipProfile = "[{\"profileGenerationTimestamp\":1572872343770,\"licenseId\":\"E048E402B5A7AFD9FB3A\",\"licenseExpiryTimestamp\":32501289540000,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":32501289540000,\"warningInterval\":0}}]";
obj.workflow = {
  "id": "start_purchase",
  "instanceId": "c7f147c3-1d76-43f4-9647-0174a99df3ac",
  "version": "1",
  "type": "APP_STORE_WORKFLOW",
  "onAbort": "CONTINUE"
 };
$done({body:JSON.stringify(obj)})