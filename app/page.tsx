'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChatbotBuilder() {
  const [chatbotConfig, setChatbotConfig] = useState({
    basicInfo: {
      businessName: '',
      industry: '',
      websiteUrl: '',
      logoUrl: '',
    },
    personality: {
      tone: '',
      language: '',
      greetingMessage: '',
      farewellMessage: '',
    },
    knowledge: {
      products: '',
      services: '',
      faq: '',
      policies: '',
    },
    audience: {
      targetAudience: '',
      customerSegments: '',
      commonQueries: '',
    },
    features: {
      productRecommendations: false,
      appointmentBooking: false,
      orderTracking: false,
      liveChatHandoff: false,
    },
    integration: {
      crmPlatform: '',
      ecommercePlatform: '',
      analyticsTool: '',
    },
    advanced: {
      customInstructions: '',
      fallbackMessage: '',
      maxConversationTurns: '10',
    },
  })

  const handleConfigChange = (category: string, field: string, value: string | boolean) => {
    setChatbotConfig(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the configuration to your backend
    console.log('Chatbot configuration:', chatbotConfig)
    alert('Chatbot configuration saved!')
  }

  const openChatbot = () => {
    // This would typically open the chatbot in a new window or tab
    alert('Opening chatbot... (This is where you would redirect to the actual chatbot URL)')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Chatbot Builder</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Tabs defaultValue="basicInfo">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="basicInfo">Basic Info</TabsTrigger>
            <TabsTrigger value="personality">Personality</TabsTrigger>
            <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basicInfo">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the fundamental details about your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={chatbotConfig.basicInfo.businessName}
                      onChange={(e) => handleConfigChange('basicInfo', 'businessName', e.target.value)}
                      placeholder="Enter your business name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      value={chatbotConfig.basicInfo.industry}
                      onChange={(e) => handleConfigChange('basicInfo', 'industry', e.target.value)}
                      placeholder="e.g., Technology, Healthcare, Retail"
                    />
                  </div>
                  <div>
                    <Label htmlFor="websiteUrl">Website URL</Label>
                    <Input
                      id="websiteUrl"
                      value={chatbotConfig.basicInfo.websiteUrl}
                      onChange={(e) => handleConfigChange('basicInfo', 'websiteUrl', e.target.value)}
                      placeholder="https://www.example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="logoUrl">Logo URL</Label>
                    <Input
                      id="logoUrl"
                      value={chatbotConfig.basicInfo.logoUrl}
                      onChange={(e) => handleConfigChange('basicInfo', 'logoUrl', e.target.value)}
                      placeholder="https://www.example.com/logo.png"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="personality">
            <Card>
              <CardHeader>
                <CardTitle>Chatbot Personality</CardTitle>
                <CardDescription>Define how your chatbot should interact with users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tone">Conversation Tone</Label>
                    <Select 
                      onValueChange={(value) => handleConfigChange('personality', 'tone', value)}
                      defaultValue={chatbotConfig.personality.tone}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="humorous">Humorous</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="language">Primary Language</Label>
                    <Input
                      id="language"
                      value={chatbotConfig.personality.language}
                      onChange={(e) => handleConfigChange('personality', 'language', e.target.value)}
                      placeholder="e.g., English, Spanish, French"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="greetingMessage">Greeting Message</Label>
                    <Textarea
                      id="greetingMessage"
                      value={chatbotConfig.personality.greetingMessage}
                      onChange={(e) => handleConfigChange('personality', 'greetingMessage', e.target.value)}
                      placeholder="Enter the initial message your chatbot will send"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="farewellMessage">Farewell Message</Label>
                    <Textarea
                      id="farewellMessage"
                      value={chatbotConfig.personality.farewellMessage}
                      onChange={(e) => handleConfigChange('personality', 'farewellMessage', e.target.value)}
                      placeholder="Enter the message your chatbot will send to end conversations"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="knowledge">
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Base</CardTitle>
                <CardDescription>Provide information about your products, services, and policies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="products">Products</Label>
                  <Textarea
                    id="products"
                    value={chatbotConfig.knowledge.products}
                    onChange={(e) => handleConfigChange('knowledge', 'products', e.target.value)}
                    placeholder="List and describe your main products"
                  />
                </div>
                <div>
                  <Label htmlFor="services">Services</Label>
                  <Textarea
                    id="services"
                    value={chatbotConfig.knowledge.services}
                    onChange={(e) => handleConfigChange('knowledge', 'services', e.target.value)}
                    placeholder="List and describe your main services"
                  />
                </div>
                <div>
                  <Label htmlFor="faq">Frequently Asked Questions</Label>
                  <Textarea
                    id="faq"
                    value={chatbotConfig.knowledge.faq}
                    onChange={(e) => handleConfigChange('knowledge', 'faq', e.target.value)}
                    placeholder="Enter common questions and answers"
                  />
                </div>
                <div>
                  <Label htmlFor="policies">Policies</Label>
                  <Textarea
                    id="policies"
                    value={chatbotConfig.knowledge.policies}
                    onChange={(e) => handleConfigChange('knowledge', 'policies', e.target.value)}
                    placeholder="Summarize important company policies (e.g., returns, privacy)"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="audience">
            <Card>
              <CardHeader>
                <CardTitle>Target Audience</CardTitle>
                <CardDescription>Define who your chatbot is designed to assist</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="targetAudience">Target Audience Description</Label>
                  <Textarea
                    id="targetAudience"
                    value={chatbotConfig.audience.targetAudience}
                    onChange={(e) => handleConfigChange('audience', 'targetAudience', e.target.value)}
                    placeholder="Describe your primary target audience"
                  />
                </div>
                <div>
                  <Label htmlFor="customerSegments">Customer Segments</Label>
                  <Textarea
                    id="customerSegments"
                    value={chatbotConfig.audience.customerSegments}
                    onChange={(e) => handleConfigChange('audience', 'customerSegments', e.target.value)}
                    placeholder="List different customer segments if applicable"
                  />
                </div>
                <div>
                  <Label htmlFor="commonQueries">Common Customer Queries</Label>
                  <Textarea
                    id="commonQueries"
                    value={chatbotConfig.audience.commonQueries}
                    onChange={(e) => handleConfigChange('audience', 'commonQueries', e.target.value)}
                    placeholder="List typical questions or concerns from your customers"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle>Chatbot Features</CardTitle>
                <CardDescription>Select the features you want to enable for your chatbot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="productRecommendations">Product Recommendations</Label>
                  <Switch
                    id="productRecommendations"
                    checked={chatbotConfig.features.productRecommendations}
                    onCheckedChange={(checked) => handleConfigChange('features', 'productRecommendations', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="appointmentBooking">Appointment Booking</Label>
                  <Switch
                    id="appointmentBooking"
                    checked={chatbotConfig.features.appointmentBooking}
                    onCheckedChange={(checked) => handleConfigChange('features', 'appointmentBooking', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="orderTracking">Order Tracking</Label>
                  <Switch
                    id="orderTracking"
                    checked={chatbotConfig.features.orderTracking}
                    onCheckedChange={(checked) => handleConfigChange('features', 'orderTracking', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="liveChatHandoff">Live Chat Hand-off</Label>
                  <Switch
                    id="liveChatHandoff"
                    checked={chatbotConfig.features.liveChatHandoff}
                    onCheckedChange={(checked) => handleConfigChange('features', 'liveChatHandoff', checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integration">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Connect your chatbot with other business systems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="crmPlatform">CRM Platform</Label>
                  <Input
                    id="crmPlatform"
                    value={chatbotConfig.integration.crmPlatform}
                    onChange={(e) => handleConfigChange('integration', 'crmPlatform', e.target.value)}
                    placeholder="e.g., Salesforce, HubSpot"
                  />
                </div>
                <div>
                  <Label htmlFor="ecommercePlatform">E-commerce Platform</Label>
                  <Input
                    id="ecommercePlatform"
                    value={chatbotConfig.integration.ecommercePlatform}
                    onChange={(e) => handleConfigChange('integration', 'ecommercePlatform', e.target.value)}
                    placeholder="e.g., Shopify, WooCommerce"
                  />
                </div>
                <div>
                  <Label htmlFor="analyticsTool">Analytics Tool</Label>
                  <Input
                    id="analyticsTool"
                    value={chatbotConfig.integration.analyticsTool}
                    onChange={(e) => handleConfigChange('integration', 'analyticsTool', e.target.value)}
                    placeholder="e.g., Google Analytics, Mixpanel"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                <CardDescription>Fine-tune your chatbot's behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="customInstructions">Custom Instructions</Label>
                  <Textarea
                    id="customInstructions"
                    value={chatbotConfig.advanced.customInstructions}
                    onChange={(e) => handleConfigChange('advanced', 'customInstructions', e.target.value)}
                    placeholder="Enter any additional instructions for your chat"
                  />
                </div>
                <div>
                  <Label htmlFor="fallbackMessage">Fallback Message</Label>
                  <Input
                    id="fallbackMessage"
                    value={chatbotConfig.advanced.fallbackMessage}
                    onChange={(e) => handleConfigChange('advanced', 'fallbackMessage', e.target.value)}
                    placeholder="Message to display when the chatbot can't understand"
                  />
                </div>
                <div>
                  <Label htmlFor="maxConversationTurns">Max Conversation Turns</Label>
                  <Input
                    id="maxConversationTurns"
                    type="number"
                    value={chatbotConfig.advanced.maxConversationTurns}
                    onChange={(e) => handleConfigChange('advanced', 'maxConversationTurns', e.target.value)}
                    placeholder="e.g., 10"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between">
          <Button type="submit">Save Configuration</Button>
          <Button type="button" onClick={openChatbot}>Open Chatbot</Button>
        </div>
      </form>
    </div>
  )
}